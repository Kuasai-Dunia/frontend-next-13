import React from "react";

import { AppButton, AppText } from "@/features/app/components";

const TrackType: React.FC = () => (
  <div className="d-flex gap-2 px-1">
    <AppButton variant="gray-5" rounded="large" width="75px">
      <AppText className="text--spacing-0" weight="semibold" size="small">
        Playlists
      </AppText>
    </AppButton>

    <AppButton variant="gray-5" rounded="large" width="65px">
      <AppText className="text--spacing-0" weight="semibold" size="small">
        Artists
      </AppText>
    </AppButton>

    <AppButton variant="gray-5" rounded="large" width="72px">
      <AppText className="text--spacing-0" weight="semibold" size="small">
        Albums
      </AppText>
    </AppButton>
  </div>
);

export default TrackType;
