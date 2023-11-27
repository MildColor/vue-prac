<script lang="ts" setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import TheHeader from '@/components/TheHeader.vue'
import SearchInput from '@/components/SearchInput.vue'
import { ref, watch } from 'vue'

const constraints = { audio: true }
const audioRef = ref<HTMLAudioElement | null>(null)

const isRecording = ref(false)

const mediaRecorder = ref<undefined | null | MediaRecorder>(null)
const audioChunks = ref<BlobPart[]>([])

/*  마이크 mediaStream 생성 */
const getMedia = async (constraints: MediaStreamConstraints) => {
  let stream = null

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints)
    /* use the stream */
    return stream
  } catch (err) {
    /* handle the error */
  }
}

const startRecording = () => {
  if (!mediaRecorder.value) return
  try {
    mediaRecorder.value.ondataavailable = (e) => {
      if (e.data.size > 0) {
        audioChunks.value.push(e.data)
      }
    }

    mediaRecorder.value.onstop = () => {
      const audioBlob = new Blob(audioChunks.value, { type: 'audio/mp3' })
      audioChunks.value = []
      const audioUrl = URL.createObjectURL(audioBlob)
      if (audioRef.value) {
        audioRef.value.src = audioUrl
        audioRef.value.play()
      }
    }

    mediaRecorder.value.start()
    isRecording.value = true
  } catch (error) {
    console.error('Error accessing microphone:', error)
  }
}

const stopRecording = () => {
  try {
    if (!mediaRecorder.value) return
    if (mediaRecorder.value.state !== 'recording') return

    mediaRecorder.value.stop()
    isRecording.value = false
  } catch (error) {
    console.error('Error accessing microphone:', error)
  }
}

const handleClickAudio = () => {
  console.log(audioRef.value)
}
// if (audioRef.value) {
//   if (audioRef.value.paused) {
//     return audioRef.value.play()
//   }

//   return audioRef.value.pause()
// }

const toggleRecording = async () => {
  if (!isRecording.value) {
    const mediaStream = await getMedia(constraints)
    if (mediaStream) {
      mediaRecorder.value = new MediaRecorder(mediaStream)
      startRecording()
    }
  } else {
    stopRecording()
  }
}

// watch(audioArray.value, () => {
//   console.log('mediaRecorder.value', audioArray.value)
// })
</script>

<template>
  <default-layout>
    <template #header>
      <the-header>
        <search-input />
        <button data-playing="false" role="switch" aria-checked="false" @click="handleClickAudio">
          <span>Play/Pause</span>
        </button>

        <audio ref="audioRef" controls></audio>
        <br /><br />
        <button @click="toggleRecording">{{ isRecording ? '종료' : '시작' }}</button>
      </the-header>
    </template>

    <router-view></router-view>
  </default-layout>
</template>

<style scoped>
.main {
  height: 100%;
  background-color: rgb(213, 244, 251);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
}

.btn-pagination {
  background-color: aquamarine;
  border-radius: 10px;
  padding: 10px 40px;
}
</style>

<!-- 

const mediaStream = await getMedia(constraints)
if (mediaStream) {
  mediaRecorder.value = new MediaRecorder(mediaStream)
  console.log(mediaRecorder.value)
}
console.log(isRecording.value)
if (!mediaRecorder.value) return
console.log(isRecording.value + '1')
if (!isRecording.value) {
  console.log(isRecording.value + '2')
  // 녹음 데이터 취득 처리
  mediaRecorder.value.ondataavailable = (event) => {
    console.log(event, 'event')
    audioArray.value.push(event.data) // 오디오 데이터가 취득될 때마다 배열에 담아둔다.
  }
  console.log(mediaRecorder.value)
  console.log(audioArray.value + 'audioArray 1 ')
  // 녹음 종료처리 & 재생처리
  mediaRecorder.value.onstop = () => {
    // 오디오 데이터를 하나로 합친다.
    const audioBlob = new Blob(audioArray.value, { type: 'audio/mp3' })
    audioArray.value.splice(0) // 기존 오디오 데이터들은 모두 비워 초기화한다.
    const audioUrl = URL.createObjectURL(audioBlob)
    console.log(isRecording.value + '3')
    // 오디오 태그에 녹음된 오디오를 설정한다.
    if (audioRef.value) {
      audioRef.value.src = audioUrl
      audioRef.value.play()
      console.log(audioUrl)
      console.log(isRecording.value + '4')
    }
  }
  // 녹음 시작
  mediaRecorder.value.start()
  isRecording.value = true
  return
}
if (isRecording.value) {
  mediaRecorder.value.stop()
  isRecording.value = false
  return
} -->
