# 01 Starting Project Notes

sudo rm -rf .git => .git klasörünü silme komutu
sudo chown -R tuna angular => çalışacağımız klasörünü yetkileri vs için ayarlanıyor
ng g c homepage => homepage companentini oluşturur.

Angular 20 öncesi dosya isimlendirmesi

```
  app.components.css
  app.components.html
  app.components.ts

```

şeklinde yapılıyordu. Angular 20 sonrasında bu zorunluluk ortadan kalktı. Bundan sonra .component ifadesini kullanmaya gerek yok.

```
  app.css
  app.html
  app.ts
```

şeklinde isimlendirme yapılabilir.

Angular 19 ve sonrasında @Component dekoratöründe "stadalone:true" ifadesi çıkarıldı.
Bunun yerine tüm komponentler standalone:true olarak değerlendirecek. Eğer bir değişiklik gerekirse dekoratör parametresinde "standalone: false" şeklinde belirtilebilir.

```
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  })
```

# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
