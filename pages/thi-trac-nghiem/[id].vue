<script setup>
import { useExamsService } from "@/services/exams";
import { useCatgoriesService } from "@/services/categories";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const route = useRoute();
const router = useRouter();
const list = ref({});
const loading = ref(false);
const form = ref([]);
const answer = ref([]);
const examEnd = ref(false);
const time = ref("");
const point = ref("");
const topic = ref("");
const timeWork = ref("");
const page = ref(1);
const limit = ref(60);
const total_question = ref(0);
const rightAnswer = ref(0);
const listCategories = ref([]);
const open = ref(false);

const startExam = async (id) => {
  try {
    loading.value = true;
    const res = await useExamsService().start(id, page.value, limit.value);
    if (res.list) {
      list.value = res.list;
      total_question.value = res.exam.total_question;
      topic.value = res.topic.slug_id;
      updateCountdown(60, 0);
    }
    if (res.success == false) loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const endExam = async () => {
  try {
    const res = await useExamsService().end(route.params.id, form.value, 60);
    if (res) {
      answer.value = res.list;
      point.value = res.history.score;
      timeWork.value = res.history.total_minute_work;
      rightAnswer.value = res.list.filter((i) => i.q_correct).length;
      open.value = true;
    }
    examEnd.value = true;
    page.value = 1;
  } catch (e) {
    console.log(e);
  }
};
const onChange = (qid, aid) => {
  let newObject = { question_id: qid, answer_id: aid };
  const existingIndex = form.value.findIndex((item) => item.question_id === newObject.question_id);
  if (existingIndex !== -1) {
    form.value[existingIndex].answer_id = newObject.answer_id;
  } else {
    form.value.push(newObject);
  }
  // console.log(form.value);
};
const getCategories = async () => {
  try {
    const res = await useCatgoriesService().list({ types: ["exam"] });
    if (res) {
      listCategories.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
const updateCountdown = (minutes, seconds) => {
  time.value = `${minutes}:${seconds}`;
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      endExam();
      return;
    }
  }
  setTimeout(() => updateCountdown(minutes, seconds), 1000);
};
const changeQuestion = (value) => {
  page.value = value;
};

onMounted(() => {
  getCategories();
  startExam(route.params.id);
});
</script>

<template>
  <NuxtLayout>
    <ClientOnly>
      <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
      <div v-else class="wrap-content h-full p-12">
        <div class="flex gap-5 md:items-start md:flex-row sm:flex-col">
          <div class="flex md:flex-col md:w-max sm:flex-row md:items-center sm:justify-center">
            <div
              class="flex justify-center items-center opacity-50 mb-1 w-max"
              v-for="i in listCategories"
              :key="i.id"
              :class="{ 'opacity-1': topic == i.slug_id }"
            >
              <img class="thumb" :src="i.img" alt="" />
            </div>
          </div>
          <div v-if="examEnd" class="w-full">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-1/2 block flex flex-col items-center p-6">
                <div class="fs-18 fw-600 text-black-700 mb-1">Điểm của bạn:</div>
                <div class="font-medium leading-6 text-gray-900 fs-16">{{ point }}</div>
              </div>
              <div class="w-1/2 block flex flex-col items-center p-6">
                <div class="fs-18 fw-600 text-black-700 mb-1">Thời gian làm bài:</div>
                <div class="font-medium leading-6 text-gray-900 fs-16">{{ timeWork }}</div>
              </div>
            </div>
            <div class="block p-6 mb-4" v-for="(i, index) in answer" :key="i.id" v-show="index + 1 == page">
              <div class="fs-18 fw-600 text-black-700 mb-6" :class="{ 'text-green': i.q_correct, 'text-red-500': !i.q_correct }">
                Câu {{ page }}: {{ i.title }}
              </div>
              <div v-for="answer in i.answers" :key="answer.id" class="flex items-center mb-2">
                <input
                  :disabled="true"
                  :id="answer.id"
                  :checked="answer.user_choose"
                  :name="'answer' + index"
                  type="radio"
                  class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-green"
                />
                <label
                  :for="answer.id"
                  class="ml-3 text-justify font-medium leading-6 text-gray-900 fs-16"
                  :class="{ 'text-green': answer.correct, 'text-red-500': !answer.correct && answer.user_choose }"
                  >{{ answer.title }}</label
                >
              </div>
              <div v-if="i.recommend" class="fs-14 text-justify italic fw-600 text-black-700 mt-4">Gợi ý: {{ i.recommend }}</div>
            </div>
            <div class="flex flex-wrap justify-start overflow-hidden rounded-xl w-full">
              <div
                class="number text-center"
                v-for="(i, index) in answer"
                :key="i.id"
                @click="changeQuestion(index + 1)"
                :class="{ 'bg-green': i.q_correct, 'bg-red': !i.q_correct, 'white-border': examEnd }"
              >
                Câu {{ index + 1 }}
              </div>
            </div>
          </div>
          <div v-else class="w-full">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-1/2 block flex flex-col items-center p-6">
                <div class="fs-18 fw-600 text-black-700 mb-1">Số câu hỏi đã trả lời:</div>
                <div class="font-medium leading-6 text-gray-900 fs-16">{{ form.length }}/{{ total_question }}</div>
              </div>
              <div class="w-1/2 block flex flex-col items-center p-6">
                <div class="fs-18 fw-600 text-black-700 mb-1">Thời gian còn lại:</div>
                <div class="font-medium leading-6 text-gray-900 fs-16">{{ time }}</div>
              </div>
            </div>
            <div class="block p-6 mb-4" v-for="(i, index) in list" :key="i.id" v-show="index + 1 == page">
              <div class="fs-18 fw-600 text-black-700 mb-6">Câu {{ page }}: {{ i.title }}</div>
              <div v-for="answer in i.answers" :key="answer.id" class="flex items-center mb-2">
                <input
                  @change="onChange(i.id, answer.id)"
                  :id="answer.id"
                  :name="'answer' + index"
                  type="radio"
                  class="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label :for="answer.id" class="ml-3 font-medium leading-6 text-gray-900 fs-16">{{ answer.title }}</label>
              </div>
            </div>
            <div class="flex flex-wrap justify-start overflow-hidden rounded-xl w-full">
              <div class="number text-center" v-for="i in total_question" :key="i" @click="changeQuestion(i)" :class="{ 'bg-blue': i == page }">
                Câu {{ i }}
              </div>
            </div>

            <div class="flex justify-end mt-8"><button class="contact" @click="endExam">Nạp bài</button></div>
          </div>
        </div>
        <TransitionRoot as="template" :show="open">
          <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white p-8 text-left shadow-xl transition-all mw-640">
                    <div>
                      <div class="mt-3 text-center sm:mt-5">
                        <div class="mt-2">
                          <div class="fw-500 fs-18 leading-6 text-gray-500 mb-3">Bạn đã trả lời đúng {{ rightAnswer }}/{{ total_question }}</div>
                          <div v-if="point >= 5" class="text-green">Chúc mừng bạn đã thi đậu!</div>
                          <div v-else class="text-red-500">Xin chia buồn bạn đã thi trượt! Hãy cố gắng hơn trong các lần thi sau nhé!</div>
                          <img class="mb-3 mt-3" src="@/assets/img/finish.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <button type="button" class="contact" @click="open = false">OK</button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </ClientOnly>
  </NuxtLayout>
</template>

<style scoped>
.wrap-content {
  padding: 24px;
  height: calc(100vh - 66px);
  overflow-y: auto;
}
.block {
  height: max-content;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.number {
  width: 12.5%;
  padding: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid var(--gray-300, #d1d5db);
}
.border-white {
  border: 1px solid #fff;
}
.alert {
  border-radius: 6px;
  background: var(--red-50, #fef2f2);
}
.contact {
  cursor: pointer;
  border-radius: 12px;
  background: var(--Theme-Blue, #ff9100);
  display: flex;
  padding: 16px 17px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  width: 20%;
}
.bg-green {
  background: #9dc175 !important;
  color: #fff;
}

.bg-red {
  background: #f46363 !important;
  color: #fff;
}
.bg-blue {
  background: #1fb2e4 !important;
  color: #fff;
}
.thumb {
  width: auto;
  height: 80px;
}
.mw-640 {
  max-width: 640px;
}
.opacity-1 {
  opacity: 1 !important;
}
@media screen and (max-width: 975px) {
  .number {
    width: 16.66666667%;
  }
}
@media screen and (max-width: 767px) {
  .number {
    width: 25%;
  }
}
</style>
