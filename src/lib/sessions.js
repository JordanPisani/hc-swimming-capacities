import { reactive } from 'vue'
import airtable from './airtable'

export const sessions = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchSessions(contentstackUid) {
  sessions.loading = true
  try {
    const { data } = await airtable.get(`/sessions`, {
      params: {
        filterByFormula: `'${contentstackUid}' = ARRAYJOIN({LocationUID})`,
        view: 'Grid view',
      },
    })

    sessions.data = data.records
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)

    sessions.error = error.message
  } finally {
    sessions.loading = false
  }
}
