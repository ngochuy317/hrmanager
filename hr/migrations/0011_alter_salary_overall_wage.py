# Generated by Django 4.0.2 on 2022-02-27 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0010_department_manager'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salary',
            name='overall_wage',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
