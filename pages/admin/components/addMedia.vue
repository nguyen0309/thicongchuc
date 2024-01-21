<script setup>
import { useMediaService } from "@/services/media";
import SelectCategories from "@/components/selectCategories.vue";

const files = ref({});
const category = ref("");

const emit = defineEmits(["close", "add-success"]);

const getCategory = (value) => {
  category.value = value;
};

const getFileName = (event) => {
  files.value = event.target.files[0];
};

const uploadFile = async () => {
  try {
    let data = new FormData();
    data.append("files", files.value);
    data.append("ref_type", "topic");
    const res = await useMediaService().uploadMedia(data);
    if (res) {
      emit("add-success");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<template>
  <div class="sm:flex sm:items-start">
    <div class="flex items-center gap-4">
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <div as="h3" class="fs-24 font-semibold text-gray-900">Thêm tài liệu</div>
        <div class="mt-6">
          <select-categories @category="getCategory" class="w-full" />
        </div>
        <div class="mt-6 w-full">
          <div class="mb-2">Upload File</div>
          <input class="w-full" type="file" id="myFile" name="filename" @change="getFileName" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-6 items-center justify-end mt-12">
    <div class="cursor-pointer" @click="emit('close')">Cancel</div>
    <button type="button" class="find" @click="uploadFile">Thêm</button>
  </div>
</template>
