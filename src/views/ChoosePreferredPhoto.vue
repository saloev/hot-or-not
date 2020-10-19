<template>
  <BasePageWrapper
    title="What type of photo you preferred ?"
    title-align="center"
    content-space="60px 0 0 0">
   <CardTypeList />
  </BasePageWrapper>
</template>
<script>
import CardTypeList from "@/components/pages/ChoosePreferredPhotoitemList.vue";

export default {
  name: "ChooseGender",

  components: {
    CardTypeList,
  },
};
</script>
