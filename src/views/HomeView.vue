<template>
  <main>
    <!-- Create the Form -->
    <form @submit="store.submitForm" novalidate>
      <!-- Create a Field (In future this would be reusable to reduce lines :) -->
      <!--  Part 1 -->
      <div class="field">
        <input type="radio" v-model="store.activityUC" value="yes" />
        <input type="radio" v-model="store.activityUC" value="no" />
        <span>{{ store.errors.activityUC }}</span>
      </div>

      <div class="field">
        <input type="radio" v-model="store.restartSchemeMan" value="yes" />
        <input type="radio" v-model="store.restartSchemeMan" value="no" />
        <span>{{ store.errors.restartSchemeMan }}</span>
      </div>
      <div class="field">
        <input
          type="radio"
          v-model="store.reasonableConsideration"
          value="yes"
        />
        <input
          type="radio"
          v-model="store.reasonableConsideration"
          value="no"
        />
        <span>{{ store.errors.reasonableConsideration }}</span>
      </div>
      <div class="field">
        <input type="radio" v-model="store.attempts" value="yes" />
        <input type="radio" v-model="store.attempts" value="no" />
        <span>{{ store.errors.attempts }}</span>
      </div>

      <!-- Part 2  -->
      <div class="field">
        <input type="radio" v-model="store.rearrangeActivity" value="yes" />
        <input type="radio" v-model="store.rearrangeActivity" value="no" />
        <span>{{ store.errors.rearrangeActivity }}</span>
      </div>

      <div v-if="store.rearrangeActivity == 'yes'" class="field">
        <input
          type="text"
          v-model="store.originalDetails"
          placeholder="Details"
        />
        <span>{{ store.errors.originalDetails }}</span>
      </div>

      <div v-if="store.rearrangeActivity == 'no'" class="field">
        <input
          type="text"
          v-model="store.notAllowReArrange"
          placeholder="Rearrange"
        />
        <span>{{ store.errors.notAllowReArrange }}</span>
      </div>

      <div class="field">
        <input
          type="text"
          v-model="store.participantFail"
          placeholder="Participant"
        />
        <span>{{ store.errors.participantFail }}</span>
      </div>

      <div class="field">
        <input type="text" v-model="store.fullDetails" placeholder="FullD" />
        <span>{{ store.errors.fullDetails }}</span>
      </div>

      <div class="field">
        <input
          type="text"
          v-model="store.volunteerDetails"
          placeholder="VolunteerD"
        />
        <span>{{ store.errors.volunteerDetails }}</span>
      </div>

      <div class="field">
        <input type="text" v-model="store.otherInfo" placeholder="OtherInfo" />
        <span>{{ store.errors.otherInfo }}</span>
      </div>

      <div class="field">
        <input
          type="text"
          v-model="store.accurateStatement"
          placeholder="accurateStatement"
        />
        <span>{{ store.errors.accurateStatement }}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { mandationStore } from "@/stores/mandation_store";

const store = mandationStore();
</script>
