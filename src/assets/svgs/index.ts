export { default as Logo } from "./Logo";
import ChevronUpIcon from "./ChevronUpIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import DashboardIcon from "./DashboardIcon";
import FileIcon from "./FileIcon";
import UsersIcon from "./UsersIcon";
import ReportsIcon from "./ReportsIcon";
import SettingsIcon from "./SettingsIcon";

export const icons = {
  "chevron-up": ChevronUpIcon,
  "chevron-down": ChevronDownIcon,
  dashboard: DashboardIcon,
  file: FileIcon,
  users: UsersIcon,
  reports: ReportsIcon,
  settings: SettingsIcon,
} as const;
