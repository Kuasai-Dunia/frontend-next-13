// React
import { useEffect } from "react";

// Components
import {
  Filter,
  HeaderItem,
  SidebarPlaylist,
  SidebarPlaylistLoading,
  TrackType,
  YourLibrary,
} from "./components";

// Hooks
import { useHome } from "@/features/home/hooks";

const Sidebar: React.FC = () => {
  const { homePlaylists, homePlaylistsData, homePlaylistsIsLoading } =
    useHome();

  useEffect(() => {
    void homePlaylists({});
  }, [homePlaylists]);

  return (
    <aside className="app__sidebar">
      <div className="sidebar__header">
        <HeaderItem
          icon="/svg/icon-home-active-24x-24.svg"
          title="Home"
          active
        />
        <HeaderItem icon="/svg/icon-search-deactive-24x24.svg" title="Search" />
      </div>

      <div className="sidebar__content">
        <YourLibrary />
        <TrackType />

        <div className="sidebar__playlists">
          <Filter />

          {homePlaylistsIsLoading ? (
            <SidebarPlaylistLoading />
          ) : (
            <div className="d-flex flex-column gap-4 overflow-y-scroll">
              {homePlaylistsData?.data.map(({ id, title, artist, image }) => (
                <SidebarPlaylist
                  key={id}
                  title={title}
                  artist={artist}
                  image={image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
