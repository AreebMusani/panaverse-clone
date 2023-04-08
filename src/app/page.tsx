import Image from 'next/image'
import Banner from './components/Home/Banner'
import CourseIntro from './components/Home/CourseIntro'
import FacultyMembers from './components/Home/FacultyMembers'
import SpecializedTracks from './components/Home/SpecializedTracks'
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      {/* BANNER SECTION */}
      <Banner />

      {/* INTRODUCTION */}
      <CourseIntro />

      {/* COURSE DETAILS */}
      <SpecializedTracks />

      {/* FACULTY MEMBERS */}
      <FacultyMembers />
    </>
  )
}
