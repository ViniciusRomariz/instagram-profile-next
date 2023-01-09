import { Avatar } from "./Avatar";

export type ProfileHeaderProps = {
  username: string;
  avatar: string;
  name: string;
  role: string;
  bio: string;
  link: string;
  publishCount: number;
};

export function ProfileHeader({
  avatar,
  bio,
  link,
  name,
  publishCount,
  role,
  username,
}: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <div className="row">
        <div className="avatar item">
          <Avatar src={"/vicrom.jpg"} size={120} alt={`Foto de Vinicius`} />
        </div>
      </div>
      <div className="row">
        <h2 className="username item">
          <span>Vinicius Romariz</span>
        </h2>
        <div className="publish-container item">
          <span className="publish-count">22</span>{" "}
          <span>publicações</span>
        </div>
        <div className="name item">
          <span>Vinicius C Romariz</span>
        </div>
        <div className="role item">
          <span>Aluno</span>
        </div>
        <div className="bio item">
          <p>Desenvolvedor, ora jogador de wow, ora critico de futebol...</p>
        </div>
        <div className="link item">
          <a href={link} title={`Foto de ${name}`} target="__blank">
            {new URL(link).host}
          </a>
        </div>
      </div>
      <style jsx>{`
        .profile-header {
          display: flex;
          padding: 32px 0;
        }

        .item:not(:first-child) {
          margin-top: 4px;
        }

        .publish-container {
          margin: 16px 0 !important;
        }

        .publish-count {
          font-weight: bold;
        }

        .username {
          font-size: 28px;
        }

        .name {
          font-weight: bold;
        }

        .role {
          color: rgba(0, 0, 0, 0.7);
        }

        .avatar {
          display: flex;
          justify-content: start;
        }

        @media (max-width: 960px) {
          .profile-header {
            flex-direction: column-reverse;
          }
        }

        @media (min-width: 960px) {
          .profile-header {
            flex-direction: row;
            justify-content: center;
          }

          .row {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .avatar {
            width: 128px;
          }
        }
      `}</style>
    </div>
  );
}
