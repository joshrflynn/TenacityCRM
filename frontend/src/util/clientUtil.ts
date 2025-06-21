import { PostgrestError } from "@supabase/supabase-js";
import {
  Client,
  CreateClientInfo,
  CreateInteractionInfo,
  Interaction,
} from "../types";
import { supabase } from "./supabaseClient";

export const InsertClient = async (
  clientInfo: CreateClientInfo
): Promise<Client | PostgrestError> => {
  const { data, error } = await supabase
    .from("clients")
    .insert([
      {
        ...clientInfo,
      },
    ])
    .select();

  return error ?? data[0];
};

export const SelectUserClients = async (
  userId: string
): Promise<Client[] | PostgrestError> => {
  const { data, error } = await supabase
    .from("clients")
    .select()
    .eq("user_id", userId);

  return error ?? data;
};

export const SelectClientDetails = async (
  id: string
): Promise<Client | PostgrestError> => {
  const { data, error } = await supabase.from("clients").select().eq("id", id);

  return error ?? data[0];
};

export const InsertInteraction = async (
  interactionInfo: CreateInteractionInfo
): Promise<Interaction | PostgrestError> => {
  const { data, error } = await supabase
    .from("interactions")
    .insert([
      {
        ...interactionInfo,
      },
    ])
    .select();

  return error ?? data[0];
};
