import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  Set `base` to your GitHub repository name.
//     e.g. if your repo is github.com/YourUser/portfolio → base: '/portfolio/'
//     If your repo is named YourUser.github.io             → base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
