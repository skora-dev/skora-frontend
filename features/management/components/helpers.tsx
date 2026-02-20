export const getStatusBadge = (status: string) => {
  const badges = {
    active: "badge badge-success",
    pending: "badge badge-warning",
    inactive: "badge badge-danger",
  };
  return badges[status as keyof typeof badges] || "badge";
};
