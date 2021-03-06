# Generated by Django 3.2.11 on 2022-02-12 04:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('status', models.BooleanField(default=True)),
                ('phone', models.CharField(max_length=18)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hr.department')),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(blank=True, max_length=100, null=True, unique=True)),
                ('phone', models.CharField(blank=True, max_length=15, null=True, unique=True)),
                ('birthday', models.DateField()),
                ('status', models.BooleanField(default=True)),
                ('gander', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], default='male', max_length=6)),
                ('marital', models.CharField(choices=[('single', 'Single'), ('married', 'Married'), ('cohabitant', 'Legal Cohabitant'), ('widower', 'Widower'), ('divorced', 'Divorced')], default='single', max_length=15)),
                ('joindate', models.DateField(blank=True, null=True)),
                ('employee_type', models.CharField(choices=[('employee', 'Employee'), ('student', 'Student'), ('intern', 'Intern'), ('freelancer', 'Freelancer')], default='employee', max_length=20)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('department', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hr.department')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
        migrations.CreateModel(
            name='ManagerDepartments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='hr.department')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr.employee')),
            ],
        ),
    ]
