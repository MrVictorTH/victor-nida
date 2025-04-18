'use client';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';
import { CourseIndexObjectResponse } from '@/types/course';

interface IProps {
  chapter?: CourseIndexObjectResponse;
  course: CourseData;
}

const InfoComponent = dynamic(() => import('./info'));
const ClassesComponent = dynamic(() => import('./class'));
const TrainerComponent = dynamic(() => import('./trainer'));
const ChapterComponent = dynamic(() => import('./chapter'));

const CourseDetailComponent: FC<IProps> = ({ chapter, course }) => {
  return (
    <div>
      <InfoComponent data={course} />
      <ClassesComponent data={course} />
      <TrainerComponent data={course} />
      <ChapterComponent data={chapter} />
    </div>
  );
};

export default CourseDetailComponent;
