import React from 'react';

type PermissionType = 'read' | 'view' | 'create' | 'edit' | 'delete' | 'authorise' | 'approve';

interface Props {
  requiredPermission: PermissionType;
  userPermission: PermissionType;
  children: React.ReactNode;
}

const checkPermission: React.FC<Props> = ({ requiredPermission, userPermission, children }) => {
  const hasPermission = userPermission === 'read' || userPermission === 'view';

  if (requiredPermission === 'read' || hasPermission) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default checkPermission;
