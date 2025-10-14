import { CategoryService } from "../services/category.service";
import { useQuery } from "@tanstack/react-query";
import type { CategoryDTO } from "../dtos/category.dto";

export function useCategory() {
  return useQuery<CategoryDTO[]>({
    queryKey: ["categories"],
    queryFn: CategoryService.list
  });
}