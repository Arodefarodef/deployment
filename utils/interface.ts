import { Document } from "mongoose";

interface iProps {
  title: string;
  projectname: string;
  description: string;
}

export interface iPropsData extends iProps, Document {}
