# maximilian-angular-the-complete-guide-2025

Maximilian Schwarzmüller: Angular — The Complete Guide (2025) course
https://github.com/mschwarzmueller/angular-complete-guide-course-resources/tree/main

sudo chown -R tuna angular-2025
sudo rm -rf .git

investment-results.component.ts

```
// bu yöntem daha kullanışlı görünüyor.
result = this.investmentService.resultData.asReadOnly();

// eğitimde bu kod kullanılıyor
results = computed(()=>this.investmentService.resultData());
```
