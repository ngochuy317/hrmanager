# Generated by Django 4.0.2 on 2022-02-26 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0009_approval_approver_id_approval_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='manager',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]