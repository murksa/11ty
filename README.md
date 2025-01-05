# Erzeugung von statischen Seiten mit [Eleventy](https://www.11ty.dev/)

## Vorbereitungen

### Variante 1 (etwas einfacher)

- [Node](https://nodejs.org/en/download) direkt installieren
- In Visual Studio das [Repository](https://github.com/murksa/11ty) klonen und öffnen
- In Visual Studio Task `npm: install` ausführen

### Variante 2 über Docker/Podman (empfohlen)

- [Podman](https://podman.io/) installieren
- In Visual Studio Code die Extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installieren
- In Visual Studio das [Repository](https://github.com/murksa/11ty) klonen und öffnen
- Visual Studio sollte rechts unten auf eine bestehende Dev Container Konfiguration hinweisen: "Reopen in Container" auswählen
- In Visual Studio Task `npm: install` ausführen


## Arbeiten

- In Visual Studio Task `npm: start` ausführen
- Im Browser auf http://localhost:8080 gehen
- Änderungen im Quelltext sollten sofort im Browser sichtbar sein
