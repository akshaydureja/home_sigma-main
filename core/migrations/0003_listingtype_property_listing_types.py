# Generated by Django 5.0.6 on 2024-05-24 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_property_builder_property_city_property_country_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ListingType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='property',
            name='listing_types',
            field=models.ManyToManyField(to='core.listingtype'),
        ),
    ]