"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""

    __tablename__ = "Playlists"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.String(50), nullable=False, unique=True)


class Song(db.Model):
    """Song."""

    __tablename__ = "Songs"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50), nullable=False, unique=True)
    artist = db.Column(db.String(50), nullable=False, unique=True)


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""

    __tablename__ = "Playlist_Songs"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    playlist_id = db.Column(db.Integer, nullable=False, default=20)
    song_id = db.Column(db.Integer, nullable=False, default=20)


# DO NOT MODIFY THIS FUNCTION
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
