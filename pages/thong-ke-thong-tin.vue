<script setup>
import { useUsersService } from "@/services/users";
import { useExamsService } from "@/services/exams";

const loading = ref(false);
const listRank = ref([]);
const listHistory = ref([]);

const getListRank = async () => {
  try {
    loading.value = true;
    const res = await useUsersService().listRank(1, 10);
    if (res) {
      listRank.value = res.list;
    }
    loading.value = false;
  } catch (e) {
    console.log(e);
  }
};
const getHistory = async () => {
  try {
    const res = await useExamsService().historyAll();
    if (res) {
      listHistory.value = res.list;
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => {
  getListRank();
  if (process.client && localStorage.getItem("congchuc24h_token")) {
    getHistory();
  }
});
</script>

<template>
  <NuxtLayout>
    <div class="wrap-content p-12 white-bg">
      <div class="flex md:flex-col gap-12">
        <ClientOnly>
          <div class="content mb-12">
            <h2 class="fs-30 fw-600 text-black-700 mb-8">Bảng xếp hạng chung</h2>
            <table>
              <tr>
                <th>STT</th>
                <th>Tên Người Dùng</th>
                <th>Ngành</th>
                <th>Điểm</th>
                <th>Thời gian</th>
              </tr>
              <tr v-for="(i, index) in listRank" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ i.user_name }}</td>
                <td>{{ i.topic_title }}</td>
                <td>{{ i.exam_score }}</td>
                <td>{{ i.time_diff }}</td>
              </tr>
            </table>
          </div>
          <div class="content" v-if="listHistory.length > 0">
            <h2 class="fs-30 fw-600 text-black-700 mb-8">Thành tích cá nhân</h2>
            <table>
              <tr>
                <th>STT</th>
                <th>Ngành</th>
                <th>Điểm</th>
                <th>Thời gian</th>
                <th>Kết quả</th>
              </tr>
              <tr v-for="(i, index) in listHistory" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ i.exam?.topic?.title }}</td>
                <td>{{ i.score }}</td>
                <td>{{ i.total_minute_work }}</td>
                <td :class="i.score > 5 ? 'text-green' : 'text-red-500'">{{ i.score > 5 ? "Đậu" : "Trượt" }}</td>
              </tr>
            </table>
          </div>
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>
