export const formatInvitationName = (to: string) => {
  if (!to) return "";
  // Mengganti _ dengan spasi dan - dengan &
  const toInvitation = to.replace(/_/g, " ").replace(/-/g, " & ");

  return toInvitation;
};
