<script setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { useCatgoriesService } from "@/services/categories";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";

const category = ref({});
const listCategories = ref([]);

const emit = defineEmits(["category"]);

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
watch(category, () => {
  emit("category", category.value.slug_id);
});
onMounted(() => {
  getCategories();
});
</script>
<template>
  <Listbox as="div" v-model="category">
    <div class="flex gap-2 items-center mb-1">
      <div class="label">Ngành</div>
    </div>
    <div class="relative mt-2">
      <ListboxButton class="w-full select">
        <span class="text-input">{{ Object.keys(category).length > 0 ? category.title : "" }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption as="template" v-for="i in listCategories" :key="i.slug_id" :value="i" v-slot="{ active, selected }">
            <div :class="[active ? 'gray-bg select-text' : 'unselect-text', 'relative cursor-pointer select-none py-4 pl-3 pr-9']">
              <span class="fs-18 leading-5" :class="[selected ? 'font-semibold' : 'font-normal', 'block']">{{ i.title }}</span>
              <span v-if="category" :class="[active ? 'select-text' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
              </span>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
<style scoped>
.select {
  height: 48px;
  background: #fff;
  border-radius: 12px;
  padding: 13px;
  color: var(--text-black-600, #272626);
  border: 1px solid var(--text-black-300, #e1e1e1);
}
.text-input {
  height: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #374151;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  text-transform: capitalize;
  display: block;
}
</style>
