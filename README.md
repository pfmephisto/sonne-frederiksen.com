# Guide
Congratulations! Your new Hugo site was created in /home/mephisto/repos/sonne-frederiksen.com.

Just a few more steps...

1. Change the current directory to /home/mephisto/repos/sonne-frederiksen.com.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>/<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.

[Quick Start](https://gohugo.io/getting-started/quick-start/)

hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme = 'ananke'" >> hugo.toml
hugo server
