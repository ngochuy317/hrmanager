from django.db import models

class WageRate(models.Model):
    wage_rate = models.IntegerField(primary_key=True)
    basic_wage = models.IntegerField()
    allowance = models.IntegerField()
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.wage_rate