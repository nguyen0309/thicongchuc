<script setup>
import { useAdminService } from "@/services/admin";
import { useMediaService } from "@/services/media";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

const editor = ref(ClassicEditor);
const editorConfig = ref({
  mediaEmbed: { previewsInData: true },
  // plugins: [Bold, Italic ],
  // toolbar: {
  //     items: ["bold", "italic"]
  // }
  // ckfinder: {
  //     options: {
  //         headers: {
  //             Authorization: 'Bearer ' + cookies.get('token')
  //         }
  //     },
  //     uploadUrl: import.meta.env.VITE_API_URL + '/api/upload'
  // }
});
const props = defineProps(["id"]);
const emit = defineEmits(["close", "action-success"]);
const title = ref("");
const description = ref("");
const content = ref("");
const img = ref("");

const getFileName = (event) => {
  const files = event.target.files;
  uploadImg(files[0]);
};

const addPost = async () => {
  try {
    // console.log("obj.value", obj.value);
    const res = await useAdminService().addPost(title.value, description.value, content.value, img.value, 2, []);
    if (res) {
      emit("action-success");
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
    const res = await useMediaService().uploadMedia(data);
    if (res) {
      img.value = res.list[0].src;
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
      <input v-model="title" class="w-full" type="text" name="" id="" />
    </div>
    <div class="mb-4">
      <div class="label mb-2">Mô tả</div>
      <textarea rows="3" v-model="description" class="w-full" type="text" name="" id="" />
    </div>
    <div class="mb-4">
      <div class="label mb-2">Nội dung</div>
      <!-- <textarea rows="8" v-model="content" class="w-full" type="text" name="" id="" /> -->
      <div>
        <ClientOnly><CKEditor :editor="editor" v-model="content" :config="editorConfig"></CKEditor></ClientOnly>
      </div>
    </div>
    <div class="mb-4">
      <div class="label mb-2">Ảnh</div>
      <input type="file" id="myFile" name="filename" @change="getFileName" accept="image/jpeg, image/png" />
    </div>
    <div class="flex justify-end gap-3">
      <button @click="emit('close')" class="find">Thoát</button>
      <button @click="addPost" class="find">Thêm</button>
    </div>
  </div>
</template>
