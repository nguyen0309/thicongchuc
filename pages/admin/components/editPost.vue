<script setup>
import { useAdminService } from "@/services/admin";
import { useMediaService } from "@/services/media";

const props = defineProps(["id"]);
const emit = defineEmits(["close"]);
const obj = ref({});

const getFileName = (event) => {
  const files = event.target.files;
  uploadImg(files[0]);
};

const addPost = async () => {
  try {
    const res = await useAdminService().addPost(obj.value.title, obj.value.description, obj.value.content, obj.value.img, 1, []);
    if (res) {
      emit("close");
    }
  } catch (e) {
    console.log(e);
  }
};
const uploadImg = async (file) => {
  try {
    let data = new FormData();
    data.append("files", file);
    data.append("ref_type", "post");
    console.log('data', data)
    const res = await useMediaService().uploadMedia(data);
    if (res) {
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div>
    <div class="fs-30 leading-5 fw-500 mb-12 text-center text-blue">Thêm tin tức</div>
    <div class="mb-4">
      <div class="label mb-2">Tiêu đề</div>
      <input v-model="obj.title" class="w-full" type="text" name="" id="" />
    </div>
    <div class="mb-4">
      <div class="label mb-2">Mô tả</div>
      <textarea rows="3" v-model="obj.description" class="w-full" type="text" name="" id="" />
    </div>
    <div class="mb-4">
      <div class="label mb-2">Nội dung</div>
      <textarea rows="8" v-model="obj.content" class="w-full" type="text" name="" id="" />
    </div>
    <div class="mb-4">
      <div class="label mb-2">Ảnh</div>
      <input type="file" id="myFile" name="filename" @change="getFileName" accept="image/gif, image/jpeg, image/png" />
    </div>
    <div class="flex justify-end gap-3">
      <button @click="emit('close')" class="find">Thoát</button>
      <button @click="addPost" class="find">Thêm</button>
    </div>
  </div>
</template>
