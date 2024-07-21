<template>
    <div class="w-full text-center">
        <p class="m-1">
            {{ title }} · {{ anthor }}'s &copy; {{ year }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useMetaStore } from '../store/meta';

const { title, anthor, year } = useMetaStore();
</script>

