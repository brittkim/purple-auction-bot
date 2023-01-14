import request from "graphql-request";
import { purpleAddress } from './config'

export const getEvents = async (
  startBlock: number,
  endBlock: number,
  query: string
): Promise<any> => {
  if (startBlock == null || endBlock == null) {
    return;
  }

  try {
    const events = await request(
      "https://api.zora.co/graphql",
      query,
      {
        endBlock: endBlock,
        startBlock: startBlock,
        collectionAddresses: purpleAddress
      },
      {
        "Content-Type": "application/json",
      }
    );
    return events.nouns.nounsEvents.nodes;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getDaos = async (
  collectionAddress: string,
  query: string
): Promise<any> => {
  if (collectionAddress == null) {
    return;
  }

  try {
    const events = await request(
      "https://api.zora.co/graphql",
      query,
      {
        collectionAddresses: collectionAddress,
      },
      {
        "Content-Type": "application/json",
      }
    );
    return events.nouns.nounsDaos.nodes;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};