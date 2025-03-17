import os
import markdown

# TODO: Better path handling.
# run in path: website/learn
markdown_dir = "md"
output_dir = "."

# Function to convert Markdown to HTML.
def convert_markdown_to_html(markdown_file, html_file):
    with open(markdown_file, "r", encoding="utf-8") as md_file:
        markdown_content = md_file.read()
        html_content = markdown.markdown(markdown_content)
        html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Page</title>
    <link rel="stylesheet" href="../styles/styles.css">
    <script src="../scripts/nav.js"></script>
</head>
<body>
<header>
    <div id="nav-placeholder"></div>
    <script>
        loadNav();
    </script>
</header>
<main>

{html_content}

    </main>
</body>
</html>
        """
        with open(html_file, "w", encoding="utf-8") as html_file:
            html_file.write(html_template)

# Convert all Markdown files to HTML.
for filename in os.listdir(markdown_dir):
    if filename.endswith(".md"):
        markdown_file = os.path.join(markdown_dir, filename)
        html_file = os.path.join(output_dir, filename.replace(".md", ".html"))
        convert_markdown_to_html(markdown_file, html_file)
        print(f"Generated: {html_file}")

print("Markdown to HTML conversion complete!")