import {CourseLesson} from '../models/CourseLesson';

type SectionParameters = {
  section: CourseLesson;
};

export type RouteStackParameters = {
  Home: undefined;
  Section: SectionParameters;
};

export type RouteTabParameters = {
  Home: undefined;
  Courses: undefined;
  Projects: undefined;
};
