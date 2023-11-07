set +e 
tar --exclude='./node_modules' --exclude='./.git' -zcvf app.tgz .
echo "directories"
ls
echo "end"
echo "file size"
du -h app.tgz

exitcode=$?

if [ "$exitcode" != "1" ] && [ "$exitcode" != "0" ]; then
    exit $exitcode
fi
set -e
