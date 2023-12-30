<script setup>
import { useExamsService } from "@/services/exams";

const route = useRoute();
const router = useRouter();
const list = ref({});
const loading = ref(false);
const form = ref([]);
const answer = ref([]);
const examEnd = ref(false);
const time = ref("");
const point = ref("");
const timeWork = ref("");
const page = ref(1);
const limit = ref(60);
const total_question = ref(0);
const startExam = async (id) => {
  try {
    loading.value = true;
    const res = await useExamsService().start(id, page.value, limit.value);
    if (res.list) {
      list.value = res.list;
      total_question.value = res.exam.total_question;
      const timeDifference = 60 * 60 * 1000 - (Date.now() - new Date(res.latest_history.start_time).getTime());
      const minutes = Math.floor(timeDifference / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      updateCountdown(minutes, seconds);
    }
    loading.value = false;
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
  console.log(form.value);
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
  startExam(route.params.id);
});
</script>

<template>
  <NuxtLayout>
    <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
    <div v-else class="wrap-content h-full p-12">
      <div v-if="examEnd">
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
          <div class="fs-14 text-justify italic fw-600 text-black-700 mt-4">Gợi ý: {{ i.recommend }}</div>
        </div>
        <div class="flex flex-wrap justify-start overflow-hidden rounded-xl w-full">
          <div
            class="number text-center"
            v-for="(i, index) in answer"
            :key="i.id"
            @click="changeQuestion(index + 1)"
            :class="{ 'bg-green': i.q_correct, 'bg-red': !i.q_correct }"
          >
            Câu {{ index + 1 }}
          </div>
        </div>
      </div>
      <div v-else>
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
          <div class="number text-center" v-for="i in 60" :key="i" @click="changeQuestion(i)" :class="{ 'bg-blue': i == page }">Câu {{ i }}</div>
        </div>

        <div class="flex justify-end mt-8"><div class="contact" @click="endExam">Nạp bài</div></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.wrap-content {
  padding: 48px;
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
  width: 16.66666667%;
  padding: 16px;
  background: var(--white, #fff);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.alert {
  border-radius: 6px;
  background: var(--red-50, #fef2f2);
}
.contact {
  cursor: pointer;
  border-radius: 12px;
  background: var(--Theme-Blue, #003c97);
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
</style>
