# Generated by Django 4.0.2 on 2022-02-22 11:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0004_alter_employee_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='owner',
        ),
    ]
