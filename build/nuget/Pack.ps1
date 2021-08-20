
#Compress-Archive -Path "..\..\src\ImagePointEditor\modules\_protected\ImagePointEditor\*" -DestinationPath "..\output\ImagePointEditor" -CompressionLevel Optimal -Force

#.\nuget.exe pack .\ImagePointEditor.nuspec -Properties Configuration=Release -OutputDirectory ..\output

.\nuget.exe pack .\ImagePointEditor.Core.nuspec -Properties Configuration=Release -OutputDirectory ..\output