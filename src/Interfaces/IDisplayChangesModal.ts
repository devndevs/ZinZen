import { GoalItem } from "@src/models/GoalItem";
import { typeOfChange } from "@src/models/InboxItem";

export type ITagsAllowedToDisplay = "title" | "duration" | "repeat" | "start" | "due" | "afterTime" | "beforeTime" | "goalColor" | "language" | "link";

export interface ITagChangesSchemaVersion {
  [K : string] : string | Date | number | null
}

export interface ITagChangesPrettierVersion {
  [K : string] : { oldVal: string, newVal: string }
}

export interface ITagsChanges {
  schemaVersion: ITagChangesSchemaVersion
  prettierVersion: ITagChangesPrettierVersion
}
export interface IDisplayChangesModal {
    parentId: string,
    typeAtPriority: typeOfChange | "none" | "conversionRequest",
    goals: GoalItem[]
  }
