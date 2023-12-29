<script setup>
import { useExamsService } from "@/services/exams";

const route = useRoute();
console.log(route);
const router = useRouter();
const list = ref({});
const loading = ref(false);
const form = ref([]);
const answer = ref([]);
const examEnd = ref(false);

const startExam = async (id) => {
  try {
    const res = await useExamsService().start(id);
    if (res.list) {
      list.value = res.list;
      console.log(list.value);
    }
  } catch (e) {
    console.log(e);
  }
};
const endExam = async () => {
  try {
    const res = await useExamsService().end(route.params.id, form.value, 60);
    if (res) {
      answer.value = res.list;
      console.log("answer", res.list);
    }
    examEnd.value = true;
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
  console.log(form.value, "form.value");
};

watch(form, (value) => {}, { deep: true });
onMounted(() => {
  startExam(route.params.id);
});
</script>

<template>
  <NuxtLayout>
    <div v-if="loading" class="h-full flex items-center justify-center"><div class="loader"></div></div>
    <div v-else class="wrap-content h-full p-12">
      <div v-if="!examEnd">
        <div class="block p-6 mb-4" v-for="(i, index) in list" :key="i.id">
          <div class="fs-18 fw-600 text-black-700 mb-6">Câu {{ index + 1 }}: {{ i.title }}</div>
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
        <div class="flex justify-end mt-8"><div class="contact" @click="endExam">Nạp bài</div></div>
      </div>
      <div v-else>
        <div class="block p-6 mb-4" v-for="(i, index) in answer" :key="i.id">
          <div class="fs-18 fw-600 text-black-700 mb-6">Câu {{ index + 1 }}: {{ i.title }}</div>
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
  width: 50%;
}
</style>
