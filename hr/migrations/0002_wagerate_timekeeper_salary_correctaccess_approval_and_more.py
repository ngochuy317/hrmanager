# Generated by Django 4.0.2 on 2022-02-18 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='WageRate',
            fields=[
                ('wage_rate', models.IntegerField(primary_key=True, serialize=False)),
                ('basic_wage', models.IntegerField()),
                ('allowance', models.IntegerField()),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Timekeeper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timecheck', models.DateTimeField(auto_now_add=True)),
                ('days', models.DateField(auto_now_add=True)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
        migrations.CreateModel(
            name='Salary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wage_rate', models.IntegerField()),
                ('basic_wage', models.IntegerField()),
                ('year', models.IntegerField()),
                ('month', models.IntegerField()),
                ('work_days', models.FloatField(default=0)),
                ('overall_wage', models.IntegerField()),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
        migrations.CreateModel(
            name='CorrectAccess',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.DateField()),
                ('time_in_days', models.DateField(blank=True, null=True)),
                ('work_days', models.FloatField(default=0)),
                ('send_email', models.BooleanField(default=False)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
        migrations.CreateModel(
            name='Approval',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('status', models.CharField(choices=[('new', 'New'), ('approve', 'Approve'), ('cancel', 'Cancel')], default='new', max_length=20)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
        migrations.AddField(
            model_name='employee',
            name='wage_rate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hr.wagerate'),
        ),
    ]
