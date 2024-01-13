<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
const open = ref(false);
</script>
<template>
  <NuxtLayout>
    <div class="p-12">
      <div class="fs-36 fw-700 leading-6 text-blue mb-7">Chào mừng bạn đã vào Mục Thi Thử!</div>
      <div class="fs-24 fw-500 text-black-500 leading-10 mb-7">
        Mục này sẽ được mở khoá trước thời gian thi chính thức là 20 ngày. Vậy nên mọi người sang Mục Thi Trắc Nghiệm KTC để luyện tập trước nhé ạ !
      </div>
      <div class="fs-20 fw-500 text-black-500 leading-9 mb-2">
        Về website tài liệu : Bộ tài liệu được soạn thảo, tuyển tập, chọn lọc, rà soát ứng với thông báo tuyển dụng của từng ngành Trợ giúp : Mọi thắc
        mắc của anh, chị xin hãy phản hồi cho chúng tôi qua số zalo :
        <span @click="open = true" class="text-yellow underline cursor-pointer">0844311767</span>
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
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all">
                <div class="flex items-center justify-center"><img class="modal mb-3" src="@/assets/img/contact-zalo.jpg" alt="" /></div>
                <div class="flex justify-end">
                  <div class="cursor-pointer" @click="open = false">Thoát</div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </NuxtLayout>
</template>
<style scoped>
.modal {
  width: 300px;
}
</style>
