FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY Money.WebApi/Money.WebApi.csproj Money.WebApi/Money.WebApi.csproj
RUN dotnet restore "Money.WebApi/Money.WebApi.csproj"
COPY . .
WORKDIR /src/Money.WebApi
RUN dotnet publish "Money.WebApi.csproj" -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /publish
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Money.WebApi.dll"]