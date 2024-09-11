if [ $# -eq 0 ]; then
  echo "No arguments supplied."
  exit 1
fi


for folder in "$@"; do
  folder_name="ex$folder"
  mkdir -p "$folder_name"
done

