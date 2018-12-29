
Compress-Archive -Path "..\..\src\ImagePointEditor\modules\_protected\ImagePointEditor\*" -DestinationPath "..\ImagePointEditor" -CompressionLevel Optimal -Force

.\nuget.exe pack .\ImagePointEditor.nuspec -Properties Configuration=Release -OutputDirectory ..\output