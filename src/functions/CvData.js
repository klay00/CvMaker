import { ref } from 'vue'; // Import the necessary dependencies (assuming you are using Vue.js)

export default function AllDataCv(data) {
  const cvData = ref([]);
  if (data.length !== 0) {
    cvData.value.push(data);
  }
  return { cvData };
}