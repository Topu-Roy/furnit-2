import { addToCartAction } from "@/actions/cartAction";
import { getProductsByCategoryAction, getProductsQuantityByCategoryAction, getProductsQuantityByColorAction } from "@/actions/productsAction";
import { createReviewAction } from "@/actions/reviewAction";
import { GetShopProductsAction, GetShopProductsQuantityAction } from "@/actions/shopAction";
import type { Category, Color, Tag } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAddToCartMutation() {
  return useMutation({ mutationFn: addToCartAction });
}

export function useCreateReviewMutation() {
  return useMutation({ mutationFn: createReviewAction });
}

export function useGetProductsByCategoryQuery({ category }: { category: Category }) {
  return useQuery({
    queryKey: ["category", category],
    queryFn: () => getProductsByCategoryAction,
  });
}

export function useGetProductsQuantityByCategoryQuery() {
  return useQuery({
    queryKey: ["category-count-by-category"],
    queryFn: () => getProductsQuantityByCategoryAction(),
  });
}

export function useGetProductsQuantityByColorQuery() {
  return useQuery({
    queryKey: ["category-count-by-color"],
    queryFn: () => getProductsQuantityByColorAction(),
  });
}

export type ShopQueryProps = {
  color: Color | null;
  category: Category | null;
  tag: Tag | null;
  page: number;
  itemPerPage: number;
};

export function useShopQuery({ category, color, tag, itemPerPage, page }: ShopQueryProps) {
  return useQuery({
    queryKey: ["shop-products", { category, color, tag, itemPerPage, page }],
    queryFn: () => GetShopProductsAction({ category, color, tag, itemPerPage, page }),
  });
}

export function useShopQuantityQuery({ category, color, tag }: Omit<ShopQueryProps, "page" | "itemPerPage">) {
  return useQuery({
    queryKey: ["shop-products-quantity", { category, color, tag }],
    queryFn: () => GetShopProductsQuantityAction({ category, color, tag }),
  });
}
