import type {ValidateTokenResponse} from "@/shared/api/video/types.ts";
import {$host} from "@/shared/api";

export const validateToken = async (
	token: string
): Promise<ValidateTokenResponse> => {
	const { data } = await $host.post(`/video/verify-token`, {token});
	return data;
}