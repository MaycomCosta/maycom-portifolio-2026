import { useState, useMemo } from "react";
import data from "../data/projects.json";

export const useProjects = () => {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(data.map((p) => p.category))];
  }, []);

  const projects = useMemo(() =>
    filter === "All" ? data : data.filter((p) => p.category === filter),
    [filter]
  );

  const featured = useMemo(() => data.filter((p) => p.featured), []);

  return { projects, featured, categories, filter, setFilter };
};
