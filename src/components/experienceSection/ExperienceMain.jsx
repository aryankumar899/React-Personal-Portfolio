import React from 'react'
import ExperienceText from './ExperinceText'
import AllExperience from './AllExperience'

const ExperienceMain = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <ExperienceText />

      {/* Divider - visible on all screens but styled for each */}
      <div className="w-full h-[1px] mt-4 bg-gray-700" />

      {/* Experience list */}
      <div className="mt-6">
        <AllExperience />
      </div>
    </div>
  )
}

export default ExperienceMain
