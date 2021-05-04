<template>
  <div v-if="sessions.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="sessions.data.length" class="accordion accordion-flush">
    <div
      v-for="{ fields, id } in sessions.data"
      :key="id"
      class="alert text-center d-flex flex-column flex-md-row justify-content-between"
      :class="
        fields.CapacityReached || fields.Available <= 0
          ? 'alert-warning'
          : 'alert-primary'
      "
      role="alert"
    >
      <span>
        <strong> {{ fields.SessionName }} </strong> -

        {{ fields.Times }}
      </span>

      <strong v-if="fields.CapacityReached || fields.Available <= 0">
        Capacity Limit Reached
      </strong>

      <span>
        {{ fields.Available }} / {{ fields.Capacity }} Swimming Slots Available
      </span>
    </div>
  </div>

  <div v-else class="alert alert-info" role="alert">
    There are no swim sessions at this time.
  </div>
</template>

<script>
import { sessions, fetchSessions } from '../lib/sessions'

export default {
  props: {
    sitecoreItemId: String,
  },

  setup(props) {
    fetchSessions(props.sitecoreItemId)

    return { sessions }
  },
}
</script>
