import apiClient from "./apiClient";
import { useState } from "react";
import create from "./httpService";

export interface User {
  id: number;
  name: string;
}

export default create("/users");
